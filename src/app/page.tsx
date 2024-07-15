import Image from "next/image";
import styles from "./page.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { FaReact, FaNetworkWired, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoIosGitBranch } from "react-icons/io";
import { FaGolang } from "react-icons/fa6";

export default function Home() {
  return (
    <body>
      <header className="h-16 flex flex-row items-center justify-between">
        <h1 className="text-3xl ml-5">gu.</h1>
        <nav className="max-w-[300px] gap-x-2 mr-[150px]">
          <a className="p-2" href="#">
            Projects
          </a>
          <a className="p-2" href="#">
            Skills
          </a>
          <a
            target="_blank"
            className="p-2"
            href="https://www.github.com/gustavuwe"
          >
            Github
          </a>
          <a
            target="_blank"
            className="p-2 bg-black rounded-lg text-white"
            href="https://www.linkedin.com/in/gustav-junghans-566b1b222/"
          >
            Reach me
          </a>
        </nav>
      </header>
      <section className="gap-[20px] max-w-7xl h-[680px] flex flex-col md:flex-row items-center justify-around m-10 mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl  md:text-4xl lg:text-6xl xl:text-7xl">
            {"👋 Hi, i'm Gustav Uwe."}
          </h1>
          <h2 className="text-xl font-medium text-muted-foreground text-slate-600 xl:text-2xl">
            Software Engineer
          </h2>
          <p className="max-w-[300px] sm:max-w-[450px] res900:max-w-[100px] md:max-w-[400px] text-muted-foreground md:text-xl/relaxed md:text-lg/[18px] lg:text-base/relaxed xl:text-xl/relaxed text-slate-600">
            {
              "I'm a developer passionate about backend development, always looking to evolve, learn and contribute to the advancement of technology🚀"
            }
          </p>
        </div>
        <div>
          <Image
            className="rounded-[50px] w-[300px] h-[300px] border-2 border-black [900px]:text-red-900 md:w-[330px] md:h-[330px] lg:w-[400px] lg:h-[400px]"
            src="/my-image-draw.png"
            width={500}
            height={500}
            alt="My Pic"
          ></Image>
        </div>
      </section>
      <section className="mt-3 w-full bg-gray-100 min-h-[650px] pb-[50px]">
        <div className="container max-w-7xl m-5 mx-auto gap-5 pt-20">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-600">
              Check out some of my recent work and the technologies I used to
              build them.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-5">
            <Card>
              <CardHeader>
                <Image
                  src="/project1.png"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Blog</h3>
                <p className="text-muted-foreground">
                  A Fullstack web application built with MongoDB, Express,
                  React, Node.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/project2.png"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">QRPoint Smart Presence</h3>
                <p className="text-muted-foreground">
                  A smart application that uses QRCODE to register the presence
                  of students/staff
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/project3.png"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Selling Tickets API</h3>
                <p className="text-muted-foreground">
                  A backend API built with GO.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {"Here are some of the technologies I'm proficient in."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-muted p-4 text-center">
              <FaReact className="h-8 w-8 mx-auto" />
              <h3 className="text-lg font-bold mt-2">React</h3>
              <p className="text-muted-foreground">
                Building modern, responsive web applications.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <FaNetworkWired className="h-8 w-8 mx-auto" />
              <h3 className="text-lg font-bold mt-2">Node.js</h3>
              <p className="text-muted-foreground">
                Developing scalable and efficient backend services.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <RiTailwindCssFill className="h-8 w-8 mx-auto" />
              <h3 className="text-lg font-bold mt-2">Tailwind CSS</h3>
              <p className="text-muted-foreground">
                Crafting beautiful and responsive user interfaces.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <FaDatabase className="h-8 w-8 mx-auto" />
              <h3 className="text-lg font-bold mt-2">
                {"Prisma & DrizzleORM's"}
              </h3>
              <p className="text-muted-foreground">
                Designing and implementing SQL databases.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <IoIosGitBranch className="h-8 w-8 mx-auto" />
              <h3 className="text-lg font-bold mt-2">Git</h3>
              <p className="text-muted-foreground">
                Proficient in version control and collaboration.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4 text-center">
              <FaGolang className="h-8 w-8 mx-auto" />
              <h3 className="text-lg font-bold mt-2">GOLang</h3>
              <p className="text-muted-foreground">
                Experience with performatic applications
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {
                "I'd love to hear from you! Feel free to reach out with any questions or opportunities."
              }
            </p>
          </div>
          <div className="mx-auto w-full max-w-md space-y-2">
            <form className="grid gap-4">
              <Input
                type="text"
                placeholder="Name"
                className="max-w-lg flex-1"
              />
              <Input
                type="email"
                placeholder="Email"
                className="max-w-lg flex-1"
              />
              <Textarea
                placeholder="Message"
                className="max-w-lg flex-1"
                rows={4}
              />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
}
