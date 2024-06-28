import React from "react";
import Button from "./components/Button/Button";
import { IoPlanetOutline, IoBookOutline } from "react-icons/io5";
import Profile from "./components/Profile/profile";
import SocialMediaIcon from "./components/Social-Icon/Social";
import Card from "./components/Card/Card";
import Podcast from "./components/Podcast Episode/Podcast";
import Vedio from "./components/Latest Video/Vedio";
import Gallery from "./components/Gallery/Gallery";
import SupportMe from "./components/Support/SupportMe";
import Footer from "./components/footer/Footer";

const slides = [
  "https://unicorn-cdn.b-cdn.net/c9a6965d-e063-4e99-8701-35741c7dd8ad/nubelson-fernandes-ie71-tmrrke-unsplash-(1).png?width=1340&height=754",
  "https://unicorn-cdn.b-cdn.net/7f56e79b-1b1b-4a6b-b652-f6392e58eb74/onur-binay-o2-ezngziyk-unsplash-(1).png?width=1340&height=754",
  "https://unicorn-cdn.b-cdn.net/24934d1f-378a-49dc-a78c-eba105152be6/theregisti-ziszilqlsom-unsplash-(1).png?width=1340&height=894",
  "https://unicorn-cdn.b-cdn.net/2efd4e37-8600-4f45-b74c-1db24e525e52/kal-visuals-b5v2bz8uso0-unsplash-(1).png?width=1340&height=894",
];

export default function App() {
  return (
    <main className="bg-[#f5f3ff] ">
      <section className=" max-w-[34rem] mx-auto sm:px-2">
        <div className="flex flex-col">
          <div>
            <Profile />
          </div>
          <div className="flex gap-3 justify-center sm:flex-row flex-col items-center mt-4 w-full">
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
        </div>
      </section>

      <section className="flex flex-col px-4 max-w-[33rem] sm:px-2 mx-auto  ">
        <h1 className="font-mono text-lg md:text-xl font-bold  ">
          Released projects
        </h1>

        <div className="w-full flex justify-center">
          <hr className="border-gray-400 w-full md:w-[590px]" />
        </div>

        <div className="grid grid-cols-1 gap-4 pt-3">
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
      <div className="px-4 sm:px-2 max-w-[33rem] mx-auto pt-5">
        <Podcast />
        <Vedio />
      </div>
     
      <div className="px-4 sm:px-2 max-w-[33rem] mx-auto rounded-2xl">
        <Gallery slides={slides} />
      </div>
      <div className="px-4 sm:px-2 max-w-[33rem] mx-auto rounded-2xl">
        <div>
          <div className="pt-5 text-[24px] font-bold">
            <h1 className="pt-4 text-[24px]  font-bold">Support Me</h1>
          </div>
          <div className="w-full flex justify-center mt-1">
            <hr className="border-gray-400 md:w-[570px]" />
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <SupportMe
            link="https://unicornplatform.com"
            logo="https://unicorn-cdn.b-cdn.net/c970fcce-bd41-43e9-bb0f-f858ab8f64c8/patreon.png?width=894&height=716"
          />
          <SupportMe
            link="https://unicornplatform.com"
            logo="https://unicorn-cdn.b-cdn.net/af8d8c8a-a6a0-4898-be9e-9924e9acdf65/buymeacoffee.png?width=894&height=716"
          />
          <SupportMe
            link="https://unicornplatform.com"
            logo="https://unicorn-cdn.b-cdn.net/a6398516-bdb1-46f6-ad7a-1cc3fa97c9b8/bitcoin.png?width=894&height=716"
          />
        </div>
      </div> 



    <div className="px-4 sm:px-2 max-w-[52rem] mx-auto pt-8  pb-11 ">
        
        <Footer/>
        


        </div>
      
    </main>
  );
}
