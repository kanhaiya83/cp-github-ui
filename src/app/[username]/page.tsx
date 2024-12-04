import SpaceCard from '@/components/owner/SpaceCard'
import { publicRequest } from '@/config/request'
import { Dataset } from '@/types/Dataset'
import { Model } from '@/types/Model'
import { Space } from '@/types/Space'
import React from 'react'
import { FcSlrBackSide } from "react-icons/fc";
import { BsDatabaseFill } from "react-icons/bs";
import { FaCube } from "react-icons/fa6";
import ProjectCard from '@/components/ProjectList/ProjectCard'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils/clx'

interface UserData {
    _id: string
    name: string
    username: string
    display_photo?: string
    spaces: Space[],
    datasets: Dataset[],
    models: Model[],
}
const Page = async ({ params }: { params: { username: string } }) => {
    const userDataResp = await publicRequest.get("/users/profile/" + params.username)
    const userData: UserData = userDataResp.data
    return (
        <main className='w-full px-[5%]'>
            <div className="flex gap-8 items-stretch min-h-screen">
                <div className="flex-[1] py-10">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-[60%]">
                            <div className="bg-gray-700 rounded-full overflow-hidden pt-[100%] relative object-center">
                                <img className='absolute w-full object-cover object-center' src={userData.display_photo} />

                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
                            <p className='bg-gray-700 text-sm text-gray-400 rounded px-1'>{userData.username}</p>
                        </div>

                        <div className="flex gap-2">
                        <Link href="/setting/profile-setting" className={"btn-gradient"}>
                                <p className='bg-black py-1 px-3'>
                                    Edit your profile
                                </p>
                            </Link>
                            <Link href="/setting" className={"btn-gradient"}>
                                <p className='bg-black py-1 px-3'>
                                    Settings
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-[1px]  bg-gray-700"></div>
                <div className="flex-[4] py-10">
                    <div className="w-full flex flex-col gap-8">
                        <div className="">
                            <h1 className="text-lg font-semibold mb-2 flex items-center gap-1">
                                <FcSlrBackSide size={24} />
                                <span>My Spaces</span>
                                <span className="text-gray-400 font-thin text-base ml-2 mt-1">{userData.spaces.length}</span>
                            </h1>
                            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
                                {
                                    userData.spaces.length ? userData.spaces.map(item => {
                                        return <SpaceCard key={item._id} space={item} link={`/spaces/${userData.username}/${item.name}`} />
                                    }) : <NoItemMessage />
                                }
                            </div>
                        </div>


                        <div className="">
                            <h1 className="text-lg font-semibold mb-2 flex items-center gap-1">
                                <BsDatabaseFill size={18} color='#888' />
                                <span>My Datasets</span>
                                <span className="text-gray-400 font-thin text-base ml-2 mt-1">{userData.datasets.length}</span>
                            </h1>
                            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
                                {
                                    userData.datasets.length ? userData.datasets.map(item => {
                                        return <ProjectCard key={item._id} project={item} link={`/datasets/${userData.username}/${item.name}`} />
                                    }) : <NoItemMessage />
                                }
                            </div>
                        </div>


                        <div className="">
                            <h1 className="text-lg font-semibold mb-2 flex items-center gap-1">
                                <FaCube size={16} color={"#888"} />
                                <span>My Models</span>
                                <span className="text-gray-400 font-thin text-base ml-2 mt-1">{userData.models.length}</span>
                            </h1>
                            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
                                {
                                    userData.models.length ? userData.models.map(item => {
                                        return <ProjectCard key={item._id} project={item} link={`/models/${userData.username}/${item.name}`} />
                                    }) : <NoItemMessage />
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
const NoItemMessage = () => {
    return <p className='text-gray-400 ml-2'>None yet!!!</p>
}
export async function generateStaticParams() {

    const spaceData = await publicRequest("/users/profile")
    const allUsers: {
        _id: string
        name: string
        username: string
        display_photo?: string
    }[] = spaceData.data

    return allUsers.map((user) => {
        return { username: user.username };
    });
}
export default Page