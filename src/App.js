import React from "react";
import Button from "./components/Button/Button";
import { IoPlanetOutline, IoBookOutline } from "react-icons/io5";
import Profile from "./components/Profile/profile";
import SocialMediaIcon from "./components/Social-Icon/Social";
import Card from "./components/Card/Card";
import Podcast from "./components/Podcast Episode/Podcast";
import Vedio from "./components/Latest Video/Vedio";
import Gallery from "./components/Gallery/Gallery";

const slides = [
  'https://unicorn-cdn.b-cdn.net/c9a6965d-e063-4e99-8701-35741c7dd8ad/nubelson-fernandes-ie71-tmrrke-unsplash-(1).png?width=1340&height=754',
  'https://unicorn-cdn.b-cdn.net/7f56e79b-1b1b-4a6b-b652-f6392e58eb74/onur-binay-o2-ezngziyk-unsplash-(1).png?width=1340&height=754',
  'https://unicorn-cdn.b-cdn.net/24934d1f-378a-49dc-a78c-eba105152be6/theregisti-ziszilqlsom-unsplash-(1).png?width=1340&height=894',
  'https://unicorn-cdn.b-cdn.net/2efd4e37-8600-4f45-b74c-1db24e525e52/kal-visuals-b5v2bz8uso0-unsplash-(1).png?width=1340&height=894',

];

export default function App() {
  return (
    <main className="bg-[#f5f3ff]">
      <section className="flex flex-col ">
        <div>
          <Profile />
        </div>
        <div className="flex gap-3 justify-center items-center mt-4 w-full">
          <Button
            icon={IoPlanetOutline}
            text="Website"
            size="medium"
            bgColor="bg-gray-100"
            textColor="text-black"
          />
          <Button
            icon={IoBookOutline}
            text="Newsletter"
            size="medium"
            bgColor="bg-gray-100"
            textColor="text-black"
          />
        </div>

        <SocialMediaIcon />
      </section>

      <section className="h-screen flex flex-col items-center">
        <div className="font-mono">
          <h1 className="mr-96 mb-1 text-[18px] font-bold">
            Released projects
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <hr className="border-gray-400 w-[560px]" />
        </div>

        <div className="grid grid-cols-1 gap-4 p-5 w-[600px]">
          <Card
            link="https://unicornplatform.com"
            logo="https://unicorn-cdn.b-cdn.net/39d8a25d-4687-41c1-8c63-3df582b81d32/unicorn-ios.png?width=600&height=600"
            heading="Unicorn Platform"
            text="Simple Website builder for busy founders"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/4c6bbe7e-d7c3-45fa-90c7-e9e07ec6e949/listing-ios.png?width=600&height=600"
            heading="ListingBoot.com"
            text="List on all relevant Direction with 1 click and get 100 backlinks"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/af0c4201-9421-4443-87c7-9b73be71a28c/index-ios.png?width=600&height=600"
            heading="Indexrusher.com Platform"
            text="Index your web pages faster for SEO"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/69622952-d83e-4b03-a9a8-61907e861cfc/devhunt-ios.png?width=600&height=600"
            heading="Devhunt.org Platform"
            text="World #1 launchpad for Dev Tools"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/93afec7d-5b67-4707-b7f3-68ce3913c713/filmgrail-ios.png?width=600&height=600"
            heading="Filmgrial.com Platform"
            text="Cinema SaaS software platforms serving 10M people worldwide"
          />
          <Card
            link="https://example.com"
            logo="https://unicorn-cdn.b-cdn.net/157c0cb5-fe43-4760-828f-6eebebc4f8bd/allgpts-ios.png?width=600&height=600"
            heading="AllGpts.co Platform"
            text="GPT directory with over million visits"
          />
        </div>
      </section>

      <Podcast />
      <Vedio />
      <div className="w-[37%] mt-5 mx-auto rounded-2xl">
        <Gallery slides={slides} />
      </div>
    </main>
  );
}
