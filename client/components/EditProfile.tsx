import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { updateUserProfile } from '../apis/userAPI'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export default function EditProfile() {
  const [newProfile, setNewProfile] = useState({
    name: '',
    about: '',
    experience: '',
    favourite_duck: '',
  })

  const user = useUser().data

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data) => updateUserProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      window.location.href = `/profile/${user?.id}`
    },
    onError: (error) => {
      console.log('Submission Failed,', error)
    },
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const data = newProfile
    mutation.mutate(data)
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.currentTarget
    setNewProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget
    setNewProfile((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (user) {
      setNewProfile((prev) => ({
        ...prev,
        name: user.name,
        about: user.about,
        experience: user.experience,
        favourite_duck: user.favourite_duck,
        author_id: user.id,
      }))
    }
  }, [user])

  return (
    <div className="form-container bg-black-800 mx-auto max-w-md rounded-md p-8 shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="about"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            About
          </label>
          <textarea
            onChange={handleChange}
            value={newProfile.about}
            name="about"
            required
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="experience"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Experience
          </label>
          <textarea
            onChange={handleChange}
            value={newProfile.experience}
            name="experience"
            required
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="favourite_duck"
            className="mb-2 block text-sm font-bold text-gray-300"
          >
            Favorite Duck
          </label>
          <select
            name="favourite_duck"
            onChange={handleSelect}
            value={newProfile.favourite_duck}
            required
            className="w-full rounded-md border bg-gray-700 px-3 py-2 text-white focus:border-yellow-500 focus:outline-none"
          >
            <option value="Mallard">Mallard</option>
            <option value="Scaup">Scaup</option>
            <option value="Northern Pintail">Northern Pintail</option>
            <option value="Seagull">Seagull</option>
            <option value="Paradise Shelduck">Paradise Shelduck</option>
            <option value="Pacific Black">Pacific Black</option>
            <option value="Shoveler">Shoveler</option>
            <option value="Pateke">Pateke</option>
            <option value="Auckland Islands Teal">Auckland Islands Teal</option>
            <option value="Grey Teal">Grey Teal</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="btn bg-accent text-accent-content drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
