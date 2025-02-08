import Image from "next/image"
import { FileEdit, Heart } from "lucide-react"
import { CalendarIcon } from "./components/calendar-icon"

export default function Page() {
const images = [
    "/placeholder.svg?height=120&width=200",
    "/placeholder.svg?height=120&width=200",
    "/placeholder.svg?height=120&width=200"
  ];

  return (
    <div className="min-h-screen bg-[#f2e6dc]">
      {/* Header */}
      <header className="bg-[#5c2936] py-80 relative">
        <div className="container mx-auto flex justify-center">
          <div className="w-12 h-12 text-[#f2e6dc]">
            <FileEdit className="w-full h-full" />
          </div>
        </div>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
          <Heart className="w-40 h-40 fill-[#f2e6dc] text-[#5c2936]" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-20 py-16 space-y-24">
        {/* First Section */}
        <section className="grid md:grid-cols-2 gap-0 items-center">
          <div className="relative"> 
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stray_calico_cat_near_Sagami_River-01.jpg/640px-Stray_calico_cat_near_Sagami_River-01.jpg"
                width={392} 
                height={464}
                alt="Decorative element"
                className="border-2 border-[#5c2936] rounded-lg"
              />
            <div className="absolute -bottom-4 -right-4">
                <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Decorative element"
                    className="opacity-50"
                />
            </div>
          </div>

          <div className="space-y-2 relative">
            <p className="text-[#5c2936]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eu quam quam. Donec vestibulum
              suscipit at, eget fermentum neque posuere erat.
            </p>
            <p className="text-[#5c2936]">
              Nunc sit amet ultrices ipsum. Nunc facilisis mauris a nunc blandit fermentum. Quisque iaculis vestibulum
              neque, ut aliquam ex ullamco.
            </p>
            <p className="text-[#5c2936]">
              Sed vitae dolor sit lorem, bibendum in neque mauris, interdum sit integer efficitur, justo at mauris
              lacinia.
            </p>
            <div className="absolute right-0 top-0">
              <div className="space-y-1">
                <Heart className="w-4 h-4 text-[#5c2936]" />
                <Heart className="w-4 h-4 text-[#5c2936]" />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="space-y-4">
         <div className="flex justify-center">
          <Image
              src="/placeholder.svg?height=120&width=200"
              width={200}
              height={120}
              alt="Couple illustration"
              className="opacity-75"
            />
          </div>
           <Image
                src="https://wwsphotohides.com/wp-content/uploads/2023/12/gato2-1024x683.jpg"
                width={1220} 
                height={464}
                alt="Decorative element"
                className="border-2 border-[#5c2936] rounded-lg"
              />
          
          <p className="text-[#5c2936] text-center max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provident eu quam quam. Donec vestibulum suscipit
            at, eget fermentum neque posuere erat.
          </p>
        </section>

        {/* Cards Section */}
        <section className="space-y-8">
          <div className="flex justify-center">
          <Image
              src="/placeholder.svg?height=120&width=200"
              width={200}
              height={120}
              alt="Couple illustration"
              className="opacity-75"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {images.map((src, index) => (
        <div key={index} className="relative rounded-[20px] border-4 border-[#5c2936] h-[400px] overflow-hidden">
          {/* Imagen de fondo */}
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            alt={`Card image ${index + 1}`}
          />
          {/* Superposición oscura */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#5c2936] opacity-75" />
          {/* Ícono de corazón con número */}
          <div className="absolute left-1/2 bottom-[calc(33%-15px)] -translate-x-1/2">
            <div className="w-[90px] h-[90px] relative">
              <Heart className="w-full h-full fill-[#f2e6dc] text-[#5c2936] translate-y-6" />
              <span className="absolute inset-0 flex items-center justify-center text-[#5c2936] font-medium text-x3 translate-y-6">
                {index + 1}
              </span>
            </div>
          </div>
        </div>
      ))}
        </div>
        </section>

        {/* Final Section */}
        <section className="space-y-8">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=120&width=200"
              width={200}
              height={120}
              alt="Couple illustration"
              className="opacity-75"
            />
          </div>
          <div className="space-y-4 max-w-2xl mx-auto text-center text-[#5c2936]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eu quam quam. Donec vestibulum
              suscipit at, eget fermentum neque posuere erat.
            </p>
            <p>
              Nunc sit amet ultrices ipsum. Nunc facilisis mauris a nunc blandit fermentum. Quisque iaculis vestibulum.
            </p>
            <p>
              Sed vitae dolor sit lorem, bibendum in neque mauris, interdum sit integer efficitur, justo at mauris
              lacinia.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#5c2936] py-80 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 -translate-y-4">
          <Heart className="w-40 h-40 fill-[#5c2936] text-[#f2e6dc]" />
        </div>
      </footer>
    </div>
  )
}

