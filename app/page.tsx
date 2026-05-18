
const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "demo";
const homePhoto = "v1769192500/IMG_8414_fvin51";
const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${homePhoto}.jpg`;

const name = "NAME"

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
        {/* Full-bleed background image */}
        <img
          src={imageUrl}
          alt="Home Banner"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ filter: "brightness(0.9)" }}
        />

        {/* Overlay */}
        <div className="relative z-10 grid h-full w-full place-items-center px-4">
          <div className="text-center">
            <h1
              className="
                font-light italic uppercase
                leading-none
                tracking-[-0.05em]
                text-black
                select-none
              "
              style={{
                fontSize: "clamp(4rem, 14vw, 12rem)",
                textShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              {name}
            </h1>

            <h2
            className="
              mt-6
              inline-block
              text-sm sm:text-base
              font-normal
              text-red
              bg-black/40
              backdrop-blur
              px-6 py-2
              rounded-full
              shadow-md
            "
          >
              Based in Bay Area, CA
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
