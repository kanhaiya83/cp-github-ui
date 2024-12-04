import { Space } from '@/types/Space'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { Hourglass, Oval } from 'react-loader-spinner'
const logIds = ['creating_cloud_infrastructure', 'initializing_environment', 'pushing_code_to_repository', 'building_docker_image', 'deploying_docker_image_to_cloud', 'adding_ssl_certificate', 'final_configuration_and_setup']
const LogsContainer = ({ data }: { data: Space }) => {
  const currentStatus = "error" || data.status
  const foundStatusIndex = logIds.findIndex(s => s == currentStatus)
  const currentStatusIndex = foundStatusIndex != -1 ? foundStatusIndex : 4
  const isError = data.status =="error"
  return (
    <div className='py-6 px-[5%]'>
      <ul className='flex flex-col gap-8'>
        {
          logIds.map((id, index) => {
            return <li key={id} className='flex items-center gap-2'>

              <div>
              {index > currentStatusIndex ? <LoadingIcon /> : (index == currentStatusIndex ? <LoadingIcon/> :<TickIcon/> )}
              </div>
              <span className={`text-2xl font-medium capitalize ${index < currentStatusIndex && "text-green-500"} ${index > currentStatusIndex && "text-orange-800"} ${index == currentStatusIndex && "text-white"}`}>{id.replaceAll("_", " ")}</span>
            </li>
          })
        }
      </ul>

    </div>
  )
}
const HourGlassIcon = () => {
  return <Hourglass
    visible={true}
    height="16"
    width="16"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#6C757D', '#ffffff']}
  />
}
const LoadingIcon = () => {
  return <Oval
    visible={true}
    strokeWidth={9}
    height="24"
    width="24"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    color={"#ffffff"}
  />
}
const TickIcon= ()=>{
  return <div className='bg-[#198754] rounded-full w-6 h-6 flex items-center justify-center'>
    <FaCheck color={"#ffffff"} size={16}/>
  </div>
}
export default LogsContainer