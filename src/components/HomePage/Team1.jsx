
import { FiPhone } from "react-icons/fi";

const team1 = [
  {
    name: 'Aditya Ghyar',
    title: 'Mentor',
    image: 'https://i.ibb.co/FKmDmQH/aditya.jpg',
    linkedin: 'https://www.linkedin.com/in/aditya-ghyar',
    instagram: 'https://www.instagram.com/ghyar.aditya?igsh=bXprN2NmcG9rbHRz',
    phone: '9373616244'
  },
  {
    name: 'Durgesh Sonar',
    title: 'Event Lead',
    image: 'https://i.ibb.co/1QBhqc0/durgesh.jpg',
    linkedin: 'https://www.linkedin.com/in/durgeshsonar-developer/',
    instagram: 'https://www.instagram.com/durgesh.2119/',
    phone: '88055 69744'
  }
]

const team2 = [
  {
    name: 'Vaibhav Deshmukh',
    title: 'Member',
    image: 'https://i.ibb.co/Fh1Vb8z/m.jpg',
    linkedin: 'https://www.linkedin.com/in/vaibhav-deshmukh-30428622a',
    instagram: 'https://www.instagram.com/va1bhav_deshmukh?igsh=cTRyb3EzNGx3dzEw',
    phone: '74209 50162'
  },
  {
    name: 'Harsh Shaha',
    title: 'Member',
    image: 'https://i.ibb.co/5Tb1QRS/harsh.jpg',
    linkedin: 'https://www.linkedin.com/in/harsh-shaha-813a72250?utm_source=share&utm_campaign=share_via&utm_content=profile',
    instagram: 'https://www.instagram.com/ingenious_coder?igsh=cWJvYm1hazhjNWlx',
    phone: '74475 25801'
  },
  {
    name: 'Aditya Barve',
    title: 'Member',
    image: 'https://i.ibb.co/JBGGNpC/barve.jpg',
    linkedin: 'https://www.linkedin.com/in/aditya-barve-6b52541a9',
    instagram: 'https://www.linkedin.com/in/aditya-barve-6b52541a9',
    phone: '99214 40013'
  },
]

const Team1 = () => {
  return (

    <>
      {/* component */}
      <div className="w-full bg-white h-full">
        <section className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-4 py-6">
          <div className="text-center pb-2">
            <h2 className="text-2xl text-indigo-600">
              Response Saved Successfully!!
            </h2>
            <div className="">
              <img src="https://i.ibb.co/yRZjwYB/wall.jpg" alt="" className="w-full h-64 object-contain" />
            </div>
            <h2 className="mt-20 text-2xl font-bold text-indigo-600">
              Our team
            </h2>
          </div>
          <div className="ml-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-20">
            {
              team1.map((item, index) => (
                <div key={index} className="w-60 bg-gray-700 rounded-lg ">
                  <div>
                    <img
                      className="object-center object-cover h-auto w-full aspect-square rounded-lg p-2"
                      src={item.image}
                      alt="pic"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl pt-2 text-white font-semibold">{item.name}</p>
                    <p className="text-base m-0 py-1 text-gray-400 font-normal">
                      {item.title}
                    </p>
                    <p className="text-base flex items-center justify-center m-0 text-gray-400">
                      <FiPhone />{item.phone}
                    </p>
                  </div>
                  <div className="flex gap-2 py-2 items-center justify-center">
                    <a href={item.instagram} target="_blank" rel="noreferrer" className="pt-1 animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        style={{ color: "#c13584" }}
                        viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href={item.linkedin} target="_blank" rel="noreferrer" className="px-1 py-1 animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        style={{ color: '#0077b5' }}
                        viewBox="0 0 24 24">
                        <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-15">
            {
              team2.map((item, index) => (
                <div key={index} className="w-60 bg-gray-700 rounded-lg ">
                  <div>
                    <img
                      className="object-center object-cover h-auto w-full aspect-square rounded-lg p-2"
                      src={item.image}
                      alt="pic"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xl pt-2 text-white font-semibold">{item.name}</p>
                    <p className="text-base m-0 py-1 text-gray-400 font-normal">
                      {item.title}
                    </p>
                    <p className="text-base flex items-center justify-center m-0 text-gray-400">
                      <FiPhone />{item.phone}
                    </p>
                  </div>
                  <div className="flex gap-2 py-2 items-center justify-center">
                    <a href={item.instagram} target="_blank" rel="noreferrer" className="pt-1 animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        style={{ color: "#c13584" }}
                        viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href={item.linkedin} target="_blank" rel="noreferrer" className="px-1 py-1 animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        style={{ color: '#0077b5' }}
                        viewBox="0 0 24 24">
                        <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </>

  )
}

export default Team1
