import React, { useState } from 'react';
import addProjectBg from './../assets/addProject.jpg'
import { Helmet } from 'react-helmet';
import SectionTitle from '../pages/Shared/SectionTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxioseSequre';
const AddProject = () => {
    const [axiosSecure] = useAxiosSecure();
    const [formData, setFormData] = useState({
        projectName: '',
        projectImage: '',
        platform: '',
        description: '',
        website_link: '',
        skill: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddProject = (e) => {
        e.preventDefault()

        console.log(formData);

        axiosSecure.post(`/addClass`, formData)
            .then(res => {
                if (res.data.insertedId) {
                  
                    // console.log(res);

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has been Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div style={{ backgroundImage: `url(${addProjectBg})` }} className="container  p-4  mx-auto px-[20%] pt-[12%] pb-[16%]">

            <Helmet>
                <title>Open Source | Add Project</title>
            </Helmet>
            <SectionTitle heading={'Add a Project'}></SectionTitle>
            <form className="lg:flex lg:flex-wrap justify-center shadow-md border rounded-2xl p-6">
                {/* Left Column */}
                <div className="lg:w-1/2 px-4 mb-4">
                    <label className="block text-sm font-bold  mb-2" htmlFor="projectName">
                        Project Name
                    </label>
                    <input
                        className="w-full border p-2 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                    />
                </div>

                <div className="lg:w-1/2 px-4 mb-4">
                    <label className="block text-sm font-bold  mb-2" htmlFor="platform">
                        Platform (e.g., Windows, Mac, Android)
                    </label>
                    <input
                        className="w-full border p-2 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        id="platform"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                    />
                </div>
                <div className="lg:w-1/2 px-4 mb-4">
                    <label className="block text-sm font-bold  mb-2" htmlFor="description">
                        Project Description
                    </label>
                    <input
                        className="w-full border p-2 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="lg:w-1/2 px-4 mb-4">
                    <label className="block text-sm font-bold  mb-2" htmlFor="website_link">
                        Main Website Link
                    </label>
                    <input
                        className="w-full border p-2 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        id="website_link"
                        name="website_link"
                        value={formData.website_link}
                        onChange={handleChange}
                    />
                </div>
                <div className="lg:w-1/2 px-4 mb-4">
                    <label className="block text-sm font-bold  mb-2" htmlFor="skill">
                        Skill Required to Contribute
                    </label>
                    <input
                        className="w-full border p-2 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        id="skill"
                        name="skill"
                        value={formData.skill}
                        onChange={handleChange}
                    />
                </div>

                <div className="lg:w-1/2 px-4 mb-4">
                    <label className="block text-sm font-bold  mb-2" htmlFor="projectImage">
                        Project Image Url
                    </label>
                    <input
                        className="w-full border p-2 rounded focus:outline-none focus:shadow-outline"
                        type="text"
                        id="projectImage"
                        name="projectImage"
                        value={formData.projectImage}
                        onChange={handleChange}
                    />
                </div>

                <div className=' flex justify-center items-center'>
                    <button onClick={handleAddProject} className=' primary-btn'>Add Project </button>
                </div>

                {/* Add more fields as needed */}
            </form>
        </div>
    );
};

export default AddProject;
