import React from "react";

function Video() {
  return (
    <section className="bg-[#f5f3ff] flex flex-col items-center">
      <div className="font-normal">
        <h1 className="mr-80 mb-0 text-[24px] font-bold">
          New Podcast Episode
        </h1>
        <p className="text-gray-500">Check out more on Spotify</p>
      </div>
      <div className="w-full flex justify-center">
        <hr className="border-gray-400 w-[570px]" />
      </div>

      <div className="mt-3">
        <iframe
          className="rounded-2xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/52FkiPbDBi4"
          title="Podcast Episode - New Release"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Video;
