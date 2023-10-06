import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddProject = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Add Your Project Info
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Project Name */}
                    <div>
                        <label htmlFor="projectName" className="block text-gray-700">
                            Project Name
                        </label>
                        <Controller
                            name="projectName"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Project Name is required' }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="text"
                                        id="projectName"
                                        className={`form-input border ${errors.projectName ? 'border-red-500' : 'border-blue-500'} rounded-md py-2 px-3`}
                                        placeholder="Project Name"
                                        style={{ borderColor: errors.projectName ? '#EF4444' : '#3B82F6' }} // Customize border color
                                    />
                                    {errors.projectName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.projectName.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                    {/* Project Image */}
                    <div>
                        <label htmlFor="projectImage" className="block text-gray-700">
                            Project Image
                        </label>
                        <Controller
                            name="projectImage"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Project Image is required' }}
                            render={({ field }) => (
                                <>
                                    <label htmlFor="projectImage" className="block text-gray-700">
                                        Project Image
                                    </label>
                                    <div className="flex items-center border rounded-md py-2 px-3">
                                        <input
                                            {...field}
                                            type="file"
                                            id="projectImage"
                                            className="w-full focus:outline-none"
                                            style={{
                                                border: `1px solid ${errors.projectImage ? '#EF4444' : '#10B981'}`,
                                                borderRadius: '0.375rem',
                                                padding: '0.5rem',
                                            }}
                                        />
                                    </div>
                                    {errors.projectImage && (
                                        <p className="text-red-500 text-sm mt-1">{errors.projectImage.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                    {/* Tutorial */}
                    <div>
                        <label htmlFor="tutorial" className="block text-gray-700">
                            Tutorial (if possible)
                        </label>
                        <Controller
                            name="tutorial"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <>
                                    <label htmlFor="tutorial" className="block text-gray-700">
                                        Tutorial (if possible)
                                    </label>
                                    <textarea
                                        {...field}
                                        id="tutorial"
                                        className={`form-textarea border ${errors.tutorial ? 'border-red-500' : 'border-purple-500'}`}
                                        placeholder="Tutorial"
                                        style={{ padding: '0.5rem', borderRadius: '0.375rem' }}
                                    />
                                    {errors.tutorial && (
                                        <p className="text-red-500 text-sm mt-1">{errors.tutorial.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                    {/* Twak.to Chat Service Code */}
                    <div>
                        <label htmlFor="chatServiceCode" className="block text-gray-700">
                            Twak.to Chat Service Embedded Code
                        </label>
                        <Controller
                            name="chatServiceCode"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Twak.to Chat Service Code is required' }}
                            render={({ field }) => (
                                <>
                                    <textarea
                                        {...field}
                                        id="tutorial"
                                        className={`form-textarea border ${errors.tutorial ? 'border-red-500' : 'border-purple-500'}`}
                                        placeholder="Tutorial"
                                        style={{ padding: '0.5rem', borderRadius: '0.375rem' }}
                                    />

                                    {errors.chatServiceCode && (
                                        <p className="text-red-500 text-sm mt-1">{errors.chatServiceCode.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Platform */}
                    <div>
                        <label htmlFor="platform" className="block text-gray-700">
                            Platform (e.g., Windows, Mac, Android)
                        </label>
                        <Controller
                            name="platform"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Platform is required' }}
                            render={({ field }) => (
                                <>
                                    <label htmlFor="platform" className="block text-gray-700">
                                        Platform (e.g., Windows, Mac, Android)
                                    </label>
                                    <div className="flex items-center border rounded-md py-2 px-3">
                                        <input
                                            {...field}
                                            type="text"
                                            id="platform"
                                            className={`w-full focus:outline-none ${errors.platform ? 'border-red-500' : 'border-teal-500'
                                                }`}
                                            placeholder="Platform"
                                        />
                                    </div>
                                    {errors.platform && (
                                        <p className="text-red-500 text-sm mt-1">{errors.platform.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                    {/* Download Link */}
                    <div>
                        <label htmlFor="downloadLink" className="block text-gray-700">
                            Download Link
                        </label>
                        <Controller
                            name="downloadLink"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Download Link is required' }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="text"
                                        id="downloadLink"
                                        className={`form-input ${errors.downloadLink ? 'border-red-500' : 'border-indigo-500'}`}
                                        placeholder="Download Link"
                                    />
                                    {errors.downloadLink && (
                                        <p className="text-red-500 text-sm mt-1">{errors.downloadLink.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Project Description */}
                    <div>
                        <label htmlFor="projectDescription" className="block text-gray-700">
                            Project Description
                        </label>
                        <Controller
                            name="projectDescription"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Project Description is required' }}
                            render={({ field }) => (
                                <>
                                    <textarea
                                        {...field}
                                        id="projectDescription"
                                        className={`form-textarea ${errors.projectDescription ? 'border-red-500' : 'border-pink-500'}`}
                                        placeholder="Project Description"
                                    />
                                    {errors.projectDescription && (
                                        <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            Email Address
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email Address is required',
                                pattern: {
                                    value: /^[A-Za-z0-9+_.-]+@(.+)$/,
                                    message: 'Invalid email address',
                                },
                            }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="email"
                                        id="email"
                                        className={`form-input ${errors.email ? 'border-red-500' : 'border-blue-500'}`}
                                        placeholder="Email Address"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>


                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            Email Address
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email Address is required',
                                pattern: {
                                    value: /^[A-Za-z0-9+_.-]+@(.+)$/,
                                    message: 'Invalid email address',
                                },
                            }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="email"
                                        id="email"
                                        className={`form-input ${errors.email ? 'border-red-500' : 'border-blue-500'}`}
                                        placeholder="Email Address"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Main Website Link */}
                    <div>
                        <label htmlFor="websiteLink" className="block text-gray-700">
                            Main Website Link
                        </label>
                        <Controller
                            name="websiteLink"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Main Website Link is required' }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="text"
                                        id="websiteLink"
                                        className={`form-input ${errors.websiteLink ? 'border-red-500' : 'border-green-500'}`}
                                        placeholder="Main Website Link"
                                    />
                                    {errors.websiteLink && (
                                        <p className="text-red-500 text-sm mt-1">{errors.websiteLink.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Social Media Accounts */}
                    <div>
                        <label htmlFor="socialMedia" className="block text-gray-700">
                            Social Media Accounts
                        </label>
                        <Controller
                            name="socialMedia"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="text"
                                        id="socialMedia"
                                        className={`form-input ${errors.socialMedia ? 'border-red-500' : 'border-yellow-500'}`}
                                        placeholder="Social Media Accounts"
                                    />
                                    {errors.socialMedia && (
                                        <p className="text-red-500 text-sm mt-1">{errors.socialMedia.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label htmlFor="mobileNumber" className="block text-gray-700">
                            Mobile Number (optional)
                        </label>
                        <Controller
                            name="mobileNumber"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="text"
                                        id="mobileNumber"
                                        className={`form-input ${errors.mobileNumber ? 'border-red-500' : 'border-indigo-500'}`}
                                        placeholder="Mobile Number"
                                    />
                                    {errors.mobileNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Skill Required to Contribute */}
                    <div>
                        <label htmlFor="skills" className="block text-gray-700">
                            Skill Required to Contribute
                        </label>
                        <Controller
                            name="skills"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Skills Required is required' }}
                            render={({ field }) => (
                                <>
                                    <input
                                        {...field}
                                        type="text"
                                        id="skills"
                                        className={`form-input ${errors.skills ? 'border-red-500' : 'border-teal-500'}`}
                                        placeholder="Skills Required"
                                    />
                                    {errors.skills && (
                                        <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProject;