import React from "react";

function Video() {
  return (
    <>
      <div className="font-normal pt-5">
        <h1 className="text-[24px] font-bold">
          New Podcast Episode
        </h1>
        <p className="text-gray-500">Check out more on Spotify</p>
      </div>
      <div className="w-full flex justify-center">
        <hr className="border-gray-400 md:w-[570px]" />
      </div>

      <div className="mt-3">
        <iframe
          className="rounded-2xl"
          src="https://www.youtube.com/embed/52FkiPbDBi4"
          title="Podcast Episode - New Release"
          allowFullScreen
          style={{width: "100%", height:"400px"}}
        ></iframe>
      </div>
    </>
  );
}

export default Video;
