import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Shivansh Shukla',
    role: 'ML Engineer',
    photo: '',
    description: 'Shivansh is an aspiring data scientist, specializing in data manipulation and model training.',
    objectPosition: 'center 30%' // Adjusted to better fit the image
  },
  {
    name: 'Rudra Srivastava',
    role: 'Data Professional',
    photo: '',
    description: 'Rudra is an aspiring data scientist, specializing in data manipulation and model training.',
    objectPosition: 'center 50%'
  },
  {
    name: 'Piyush Kumar Singh',
    role: 'Backend Developer',
    photo: '',
    description: 'I am Piyush Kumar Singh. I aim to become an Backend Developer',
    objectPosition: 'center 70%'
  },
  {
    name: 'Varun Sehgal',
    role: 'Full Stack Developer',
    photo: '',
    description: 'I am Full stack Developer. I have a role to develop frontend as well as develop backend of website for the team',
    objectPosition: 'center 50%'
  }
]

const Team = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12 md:py-24 bg-transparent text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-transparent p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-800">
            <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
              <Image
                src={member.photo}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                objectPosition={member.objectPosition}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-sm font-medium text-white mb-3">{member.role}</p>
            <p className="text-sm text-white text-center">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
