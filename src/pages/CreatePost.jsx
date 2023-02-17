import React, {useState} from 'react'
import {useNavigate} from 'react-routere-dom';

import {preview } from '../assets'
import {getRandomPrompt} from '../utils'
import { FormField, Loader } from '../components';

const CreatePost = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt : '',
    photo : '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          TCreate</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create imaginative and visually stunning images through
          DALL-E AI and share them with the community</p>
      </div>

      <form className="mt-16 max-w-3xl">
        

      </form>
    </section>
  )
}

export default CreatePost