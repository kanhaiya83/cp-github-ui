"use client";
import FromHeader from "@/components/createFroms/Header";
import Header from "@/components/owner_repoName/Header";
import Form from "@/components/createFroms/Form";

const page = () => {
  return (
    <div>
      <Header rootPath="" pathname="" />
      <div className="max-w-3xl mx-auto mt-10 flex flex-col ">
        <FromHeader
          icon={
            <svg
              className="w-12 h-12 mx-auto text-red-500 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 25 25"
            >
              <ellipse
                cx="12.5"
                cy="5"
                fill="currentColor"
                fillOpacity="0.25"
                rx="7.5"
                ry="2"
              ></ellipse>
              <path
                d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
                fill="currentColor"
                opacity="0.5"
              ></path>
              <path
                d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
                fill="currentColor"
                opacity="0.5"
              ></path>
              <path
                d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
                fill="currentColor"
              ></path>
            </svg>
          }
          title="Create new dataset repository"
          description="A repository contains all dataset files, including the revision history."
        />
        <Form
          isSdk={false}
          isSpaceHardware={false}
          isShortDescription={false}
          buttonText="Create dataset"
        />
      </div>
    </div>
  );
};

export default page;
