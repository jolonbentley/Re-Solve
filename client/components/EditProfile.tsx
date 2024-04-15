import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { updateUserProfile } from '../apis/userAPI'
import { useAuth0 } from '@auth0/auth0-react'

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
    <div>
      <div>Edit Profile Page</div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProfile.name}
          onChange={handleChange}
        />
        <textarea
          onChange={handleChange}
          value={newProfile.about}
          name="about"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          onChange={handleChange}
          value={newProfile.experience}
          name="experience"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <select
          name="favourite_duck"
          onChange={handleSelect}
          defaultValue={newProfile.favourite_duck}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
