import { clients } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skill from "@/app/(main)/resume/components/Skill";
import { skills } from "@/constants";

export default function About() {
  return (
    <div className="flex flex-col w-full gap-16 p-7 rounded-md shadow-md bg-foreground">
      <div className="flex flex-col gap-10 items-center">
        <div className="text-center">
          <p className="text-xsm text-primary">Who Am I?</p>
          <h2 className="text-4xl text-copy font-bold">About Me</h2>
        </div>

        <div>
          <p className="text-copy-light">
            Experienced blockchain developer with over 6 years of expertise in
            Rust and Golang. Proficient in EVM, Solana, Polkadot ecosystems.
            Proven track record in designing and implementing successful
            blockchain solutions. Passionate about innovation and staying
            current in the rapidly evolving blockchain industry.{" "}
          </p>
          <br />
          <p className="text-copy-light">
            My philosophy is simple: Embrace challenges, foster innovation, and
            promote collaboration. When I'm on your team, expect a proactive
            partner ready to push boundaries, to solve problems, and to
            contribute to our shared success. Dive into the world of Web3 with
            me—let's create something extraordinary, together!
          </p>
        </div>
        

        <Link
          href="/Yoshiyuki.pdf"
          className="p-3 rounded-md bg-primary text-copy"
        >
          View My Resume
        </Link>
      </div>
	  <div className="flex flex-col gap-4">
          <div>
            <p className="text-xsm text-primary">My</p>
            <h2 className="text-4xl text-copy font-bold">Skills</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {skills.map(({ skill, level }, index) => (
              <Skill key={index} skill={skill} level={level} />
            ))}
          </div>
        </div>
      <div className="flex flex-col gap-5 items-center text-center">
        {/* <div>
					<p className="text-xsm text-primary">My</p>
					<h2 className="text-4xl text-copy font-bold">Clients</h2>
				</div> */}
        {/* <div className="flex flex-wrap justify-center gap-7">
					{clients.map(({ company, client, img }, index) => (
						<div
							key={index}
							className="flex flex-col w-[200px] gap-2 items-center bg-primary p-5 rounded-md shadow-lg"
						>
							<Image
								src={img}
								width={500}
								height={500}
								className="object-cover w-[75px] h-[75px] rounded-full border-2 border-primary-content bg-black"
							/>
							<p className="text-copy font-bold">{company}</p>
							<p>{client}</p>
						</div>
					))}
				</div> */}
      </div>
    </div>
  );
}
