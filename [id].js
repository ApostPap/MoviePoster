import Navbar from "@/components/navbar";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Link from "next/link";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function BlogPage() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-12">
              <div className="text-center mb-6">
                <span className="text-base md:text-lg">
                  <Link className="text-blue-500 hover:underline" href="#">
                    CATEGORY
                  </Link>
                  <span className="text-blueGray-400">24 Jan, 2020</span>
                </span>
                <h2 className="text-4xl md:text-5xl my-2 font-bold font-heading">
                  Curabitur vestibulum odio maximus ipsum
                </h2>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="pl-4">
                  <p className="text-blueGray-500 mb-1">Alice Bradley</p>
                  <p className="text-xs text-blue-600 font-semibold">Author</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <img
                className="h-80 mx-auto mb-6 object-cover rounded"
                src="https://images.unsplash.com/photo-1603665330306-dd1a67e0cc4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=300&q=80&blend=fe8484&sat=-80&blend-mode=multiply"
                alt=""
              />
              <p className="text-sm text-center text-blueGray-400">
                Photo by{" "}
                <Link className="text-blue-500" href="#">
                  Pawe&amp;lstrok; Czerwi&amp;nacute;ski
                </Link>{" "}
                on{" "}
                <Link className="text-blue-500" href="#">
                  Unsplash
                </Link>
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="mb-6 leading-loose text-blueGray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent commodo est eget consequat imperdiet. Suspendisse
                laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla
                at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum
                convallis. Suspendisse id nunc maximus, suscipit nte ac,
                vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum
                elit. Nullam laoreet mollis dictum. Ut suscipit, magna at
                elementum iaculis, erat erat fermentum justo, sit amet ultrices
                enim leo sit amet purus. Nulla sed erat molestie, auctor mauris
                lobortis, iaculis justo.
              </p>
              <p className="leading-loose text-blueGray-400">
                Duis hendrerit dui in dui ornare luctus. Nullam gravida
                tincidunt lorem cursus suscipit. Integer scelerisque sem et sem
                porta, eu volutpat mi tempor. Duis interdum sodales lacus non
                tempor. Nam mattis, sapien a commodo ultrices, nunc orci
                tincidunt ante, tempus tempus turpis metus laoreet lacus.
                Praesent condimentum, arcu ut fringilla tincidunt, augue diam
                pretium augue, sit amet vestibulum nunc felis vel metus. Duis
                dolor nulla, pellentesque non ultrices ut, convallis eu felis.
                Duis luctus tempor arcu, vitae elementum massa porta non. Morbi
                aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut
                dictum lacus neque in urna. Nam metus elit, ullamcorper pretium
                nisi at, aliquet gravida lectus. Nullam id lectus pellentesque,
                suscipit dolor eget, consequat velit. Pellentesque finibus
                commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut
                sagittis nunc maximus ut.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row mb-10">
              <Link
                className="inline-block mx-auto mb-10 lg:mb-0 lg:ml-0 lg:mr-auto text-3xl font-semibold leading-none"
                href="#"
              >
                <img
                  className="h-10"
                  src="metis-assets/logos/metis/metis.svg"
                  alt=""
                  width="auto"
                />
              </Link>
              <ul className="flex lg:flex-row items-center justify-center space-x-12">
                <li>
                  <Link
                    className="text-lg font-bold font-heading hover:text-blueGray-600"
                    href="#"
                  >
                    Stocks
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-bold font-heading hover:text-blueGray-600"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
              <p className="text-xs text-blueGray-400">
                © 2021. All rights reserved.
              </p>
              <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                <Link className="inline-block px-2" href="#">
                  <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                </Link>
                <Link
                  className="inline-block px-2"
                  href="https://www.instagram.com/apostolos_papadopouloss/"
                >
                  <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
