import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../components/Loading/Loading";
import ConfrimationModal from "../../Pages/Shared/ConfrimationModal/ConfrimationModal";

const MangeDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = ()=>{
        setDeletingDoctor(null);
    };
    const handalDeleteDoctor = (doctor)=> {
        console.log(doctor);
    }
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h3 className="text-3xl mb-6">Manage Doctors {doctors.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, idx) => (
              <tr key={doctor._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor.speciality}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confrimationModal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfrimationModal
          title={`Are You Sure? you want to delete?`}
          message={`If You are delete ${deletingDoctor.name}. Note: It cannot be undone!`}
          closeModal={closeModal}
          modalData={deletingDoctor}
          seccessAction={handalDeleteDoctor}
        ></ConfrimationModal>
      )}
    </div>
  );
};

export default MangeDoctors;
