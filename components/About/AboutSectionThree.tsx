import Image from 'next/image'
import React from 'react'

function AboutSectionThree() {
  return (
     <section className="py-16 md:py-20 lg:py-28">
          <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Đội ngũ Nhân Sự</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <Image width={400} height={200} src="/images/User/avata.jpg" alt="Tên nhân viên 1"  className=""/>
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2">Ông Trần Văn Phan</h3>
    <p className="text-gray-600">CEO</p>
  </div>
</div>


{/* ... */}

</div>
          </div>
        </section>
  )
}

export default AboutSectionThree