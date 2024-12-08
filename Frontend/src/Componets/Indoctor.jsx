import React from 'react';

const Indoctor = () => {
  const indoctor = {
    id: 1,
    imgSrc:
      'https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg',
    name: 'Doctor Name 1',
    specialization: 'Orthopedic',
    description: `
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took 
      a galley of type and scrambled it to make a type specimen book. It has 
      survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release 
      of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
  };

  console.log(indoctor.id);

  return (
    <div className="h-screen flex bg-black flex-row">
      <img src={indoctor.imgSrc} alt={indoctor.name} className="object-cover h-80" />
      <div className="text-white flex flex-col p-4">
        <h1 className="text-3xl font-semibold">{indoctor.name}</h1>
        <p className="text-xl">{indoctor.specialization}</p>
        <p className="mt-2 text-sm text-gray-300">{indoctor.description}</p>
      </div>
    </div>
  );
};

export default Indoctor;
