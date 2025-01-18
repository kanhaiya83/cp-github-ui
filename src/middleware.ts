import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server'

// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: '/datasets/:path*',
}

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    if (pathname.includes("new")) return

    let userData:any = false
    try {
        const fb_token = request.cookies.get("firebase-token")?.value
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`,
            {
                headers: {
                    "Authorization": `Bearer ${fb_token}`
                }
            }
        );
        if (response.data) {
            console.log("userData", response.data)
            userData = response.data
        }
    }
    catch (e) {
        console.log(e)
    }


    const pathnameArray = pathname.split("/", 4)
    const type = pathnameArray[1]
    const namespace = encodeURIComponent(`${pathnameArray[2]}/${pathnameArray[3]}`)
    console.log({ type, namespace })
    try {
        const repoData = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/${type}/namespace/${namespace}`)
        if (repoData.data) {
            // for private repo, 404 for unauthenticated or incorrect user
            if ((repoData.data.visibility == "private" && !repoData.data.tokenized) && (!userData || repoData.data.user._id !== userData._id)) {
                return NextResponse.rewrite(new URL('/404', request.url))
            }
        }
    }
    catch (e) {
        // no namespace is found
        return NextResponse.rewrite(new URL('/404', request.url))

    }

}