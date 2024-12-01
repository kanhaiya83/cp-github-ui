"use client"
import { authenticatedRequest } from '@/config/request';
import { useCurrentUser } from '@/hooks/user';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { LuBook, LuBookLock } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { formatsData, modalitiesData } from './contant';
function validateGitHubRepoName(name: string) {
  // Check if the name is between 1 and 100 characters
  if (name.length === 0 || name.length > 100) {
    return false;
  }

  // Check if it starts or ends with a dash or underscore
  if (/^[-_]|[-_]$/.test(name)) {
    return false;
  }

  // Check if it contains only valid characters: alphanumeric, dash, and underscore
  if (!/^[a-zA-Z0-9-_]+$/.test(name)) {
    return false;
  }

  return true;
}
interface FormData {
  name: string,
  owner: string,
  license: string,
  visibility: string,
  format: string[],
  modalities: string[],
  description: string
}
const CreateDatasetForm = ({ type }: { type: "dataset" | "model" }) => {
  const { user } = useCurrentUser()
  const router = useRouter()
  const [isValidName, setIsValidName] = useState<boolean | null>(true)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    owner: '',
    license: 'MIT',
    visibility: 'private',
    format: [],
    modalities: [],
    description: "Placeholder"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleModalityChange = (key: string) => {
    setFormData(prev => {
      let temp = [...prev.modalities]
      if (temp.includes(key)) {
        temp = temp.filter(k => k != key)
      }
      else {
        temp.push(key)
      }
      return {
        ...prev,
        modalities: temp
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      router.push("/login")
    }
    try {
      const resp = await toast.promise(authenticatedRequest.post(`/${type}s`, formData), { pending: "Creating.." })
      // router.push(`/datasets/${formData.owner}/${formData.name}`)
      toast.success("Created successfullly")
      router.push(`/${type}s/${user?.username}/${formData.name}`)
      return
    }

    catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response)
        toast.error(e.message)
        return
      }
      toast.error("Some error occurred!!")
    }

  };

  useEffect(() => {
    setIsValidName(validateGitHubRepoName(formData.name))
  }, [formData.name])

  return (
    <form onSubmit={handleSubmit} className="bg-transparent p-4 rounded-lg space-y-5 text-xs">
      {/* Name and Owner Row */}
      <div className="flex space-x-4">

        <div className="w-5/12">
          <label className="block text-white mb-1">Owner</label>
          <select
            name="owner"
            // value={formData.owner}
            // onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white focus:outline-none rounded-lg border border-gray-600"
          >
            <option selected value={user?.username}>{user?.username}</option>
          </select>
        </div>
        <div className="w-7/12">
          <label className="block text-white mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 bg-gray-800 text-white focus:outline-none rounded-lg border ${(isValidName || formData.name?.length == 0) ? "border-gray-600" : "border-red-500"}`}

            placeholder="Enter name"
            required
          />
        </div>
      </div>

      {/* License Field */}
      <div className="w-full">
        <label className="block text-white mb-1">License</label>
        <select
          name="license"
          value={formData.license}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white focus:outline-none rounded-lg border border-gray-600"
        >
          <option value="MIT">MIT</option>
          <option value="Apache">Apache</option>
          <option value="GPL">GPL</option>
          <option value="BSD">BSD</option>
          <option value="ISC">ISC</option>
        </select>
      </div>
      {
        type == "dataset" &&
        <>
          {/* Format */}
          <div className="">
            <label htmlFor="" className='mb-1 block'>Format</label>
            <div className='flex flex-wrap gap-x-3 gap-y-2'>
              {formatsData.map(format => {
                return <button key={format.name} type="button" onClick={() => { setFormData((prev: any) => ({ ...prev, format: [format.name] })) }} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm leading-none whitespace-nowrap rounded-md border border-solid  ${formData.format[0] == format.name ? "bg-blue-500 bg-opacity-20 border-blue-600 text-white" : "bg-transparent border-zinc-700 text-neutral-400"}`}><img src={format.icon} alt="" className='w-4' />{format.name}</button>
              })}
            </div>
          </div>
          {/* Modalities */}
          <div className="">
            <label htmlFor="" className='mb-1 block'>Modalities</label>
            <div className='flex flex-wrap gap-x-3 gap-y-2'>
              {modalitiesData.map(modality => {
                return <button key={modality.label} type="button" onClick={() => { handleModalityChange(modality.label) }} className={`flex items-center gap-1.5 px-3 py-1.5 text-sm leading-none whitespace-nowrap rounded-md border border-solid  ${formData.modalities.includes(modality.label) ? "bg-blue-500 bg-opacity-20 border-blue-600 text-white" : "bg-transparent border-zinc-700 text-neutral-400"}`}><img src={modality.icon} alt="" className='w-4' />{modality.label}</button>
              })}
            </div>
          </div>
        </>
      }
      {/* Visibility Radio Buttons */}
      <div className="w-full py-5 border-y border-gray-700">
        <div className="space-y-4">
          <div className="text-white flex items-start gap-1.5">
            <input
              type="radio"
              name="visibility"
              value="private"
              checked={formData.visibility === 'private'}
              onChange={handleChange}
              className="mt-1"
            />
            <div className="flex text-gray-500 items-start gap-1.5">
              <div>
                <LuBookLock size={24} />
              </div>
              <div>
                <label className='block text-sm text-white font-medium'>Private</label>
                <p>{"Only you (personal dataset) or members of your organization (organization dataset) can see and commit to this dataset."}</p>
              </div>
            </div>
          </div>
          <div className="text-white flex items-start gap-1.5">
            <input
              type="radio"
              name="visibility"
              value="public"
              checked={formData.visibility === 'public'}
              onChange={handleChange}
              className="mt-1"
            />
            <div className="flex text-gray-500 items-start gap-1.5">
              <div>
                <LuBook size={24} />
              </div>
              <div>
                <label className='block text-sm text-white font-medium'>Public</label>
                <p>{"Anyone on the internet can see this dataset. Only you (personal dataset) or members of your organization (organization dataset) can commit."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 rounded border border-gray-700 bg-gray-900 text-gray-500 text-center">
        Once your dataset is created, you can upload your files using the git.
      </div>
      {/* Submit Button */}
      <button
        disabled={!isValidName}
        type="submit"
        className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full ${!isValidName && "opacity-25"}`}
      >
        Create
      </button>
    </form>
  );
};

export default CreateDatasetForm;
