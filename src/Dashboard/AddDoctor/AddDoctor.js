import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const AddDoctor = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    
    const {data: specialities = [], isLoading} = useQuery({
        queryKey :['specialtiy'],
        queryFn: async()=> {
            const res = await fetch(
              "http://localhost:5000/appointmentSpeciality"
            );
            const data = await res.json();
            return data;
        }
    })
    const handelAddDoctor = (data) => {
        
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(imgData=> {
            console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                  name: data.name,
                  email: data.email,
                  speciality: data.speciality,
                  image: imgData.data.url,
                };
                //save in db
                fetch("http://localhost:5000/doctors", {
                    method: 'POST',
                    headers: {
                        'content-type':'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is added successfully!`);
                    navigate("/dashboard/managedoctors");
                })
            }
        })
    };
    if(isLoading){
        return <Loading/>
    }
    return (
      <div className="w-96 p-7">
        <h3 className="text-3xl">Add a Doctor</h3>
        <form onSubmit={handleSubmit(handelAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name filed is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-error my-2">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-error my-2">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Spciality</span>
            </label>
            <select 
            {...register("speciality")}
            className="select select-bordered w-full max-w-xs">
              {specialities.map((speciality) => (
                <option key={speciality._id} value={speciality?.name}>
                  {speciality?.name}
                </option>
              ))}
            </select>
            {errors.password && (
              <p className="text-error my-2">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", { required: "Photo filed is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && (
              <p className="text-error my-2">{errors.img.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-6"
            type="submit"
            value="Add Doctor"
          />
          <div>
            {/* {signupError && <p className="text-warning my-2">{signupError}</p>} */}
          </div>
        </form>
      </div>
    );
};

export default AddDoctor;