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
              className="w-12 h-12 mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                d="M7.80914 18.7462V24.1907H13.2536V18.7462H7.80914Z"
                fill="#FF3270"
              ></path>
              <path
                d="M18.7458 18.7462V24.1907H24.1903V18.7462H18.7458Z"
                fill="#861FFF"
              ></path>
              <path
                d="M7.80914 7.80982V13.2543H13.2536V7.80982H7.80914Z"
                fill="#097EFF"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 6.41775C4 5.08246 5.08246 4 6.41775 4H14.6457C15.7626 4 16.7026 4.75724 16.9802 5.78629C18.1505 4.67902 19.7302 4 21.4685 4C25.0758 4 28.0003 6.92436 28.0003 10.5317C28.0003 12.27 27.3212 13.8497 26.2139 15.02C27.243 15.2977 28.0003 16.2376 28.0003 17.3545V25.5824C28.0003 26.9177 26.9177 28.0003 25.5824 28.0003H17.0635H14.9367H6.41775C5.08246 28.0003 4 26.9177 4 25.5824V15.1587V14.9367V6.41775ZM7.80952 7.80952V13.254H13.254V7.80952H7.80952ZM7.80952 24.1907V18.7462H13.254V24.1907H7.80952ZM18.7462 24.1907V18.7462H24.1907V24.1907H18.7462ZM18.7462 10.5317C18.7462 9.0283 19.9651 7.80952 21.4685 7.80952C22.9719 7.80952 24.1907 9.0283 24.1907 10.5317C24.1907 12.0352 22.9719 13.254 21.4685 13.254C19.9651 13.254 18.7462 12.0352 18.7462 10.5317Z"
                fill="black"
              ></path>
              <path
                d="M21.4681 7.80982C19.9647 7.80982 18.7458 9.02861 18.7458 10.5321C18.7458 12.0355 19.9647 13.2543 21.4681 13.2543C22.9715 13.2543 24.1903 12.0355 24.1903 10.5321C24.1903 9.02861 22.9715 7.80982 21.4681 7.80982Z"
                fill="#FFD702"
              ></path>
            </svg>
          }
          title="Create new Space"
          description="Spaces are Git repositories that host application code for Machine Learning demos. You can build Spaces with Python libraries like Streamlit or Gradio, or using Docker images."
        />
        <Form
          isSdk={true}
          isSpaceHardware={true}
          isShortDescription={true}
          buttonText="Create Space"
        />
      </div>
    </div>
  );
};

export default page;
