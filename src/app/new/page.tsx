"use client";
import FromHeader from "@/components/createFroms/Header";
import Header from "@/components/Header";
import Form from "@/components/createFroms/Form";

const page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto mt-10 flex flex-col ">
        <FromHeader
          icon={
            <svg
              className="w-12 h-12 mx-auto text-indigo-400 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                className="uim-quaternary"
                d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"
                opacity=".25"
                fill="currentColor"
              ></path>
              <path
                className="uim-tertiary"
                d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
                opacity=".5"
                fill="currentColor"
              ></path>
              <path
                className="uim-primary"
                d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
                fill="currentColor"
              ></path>
            </svg>
          }
          title="Create new model repository"
          description="A repository contains all model files, including the revision history."
        />
        <Form
          // isSdk={false}
          // isSpaceHardware={false}
          // isShortDescription={false}
          // buttonText="Create model"
        />
      </div>
    </div>
  );
};

export default page;
