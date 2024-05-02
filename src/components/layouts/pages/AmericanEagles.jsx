import React from 'react'
import ImagenAmerican from  '../../../assets/americanEagle/buso.png'

const AmericanEagles = () => {

  const imagesData = [
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},
    {id: 1, src: [ImagenAmerican], description: 'Buso American Eagle', precio: '$250.000'},

  ];
  


  return (
    <div className="bg-sky-100 top-35 w-full grid grid-cols-3 gap-4">
      {/* Mapear el array de datos para renderizar cada imagen */}
      {imagesData.map(image => (
        <div key={image.id} className="border p-4">
          {/* Imagen */}
          <img src={image.src} alt={image.description} className="w-full h-auto mb-2" />
          {/* Descripción */}
          <p className="text-lg font-bold">{image.description}</p>
          {/* Precio */}
          <p className="text-sm">{image.precio}</p>
          {/* Botón Agregar a la compra */}
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Agregar a la compra</button>
        </div>
      ))}
    </div>
  );
}

export default AmericanEagles