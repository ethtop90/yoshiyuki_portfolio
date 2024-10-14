export default function EducationCard({ school, qualification, date, desc }) {
	return (
		<div className="flex flex-col w-full gap-7 bg-primary-content p-5 rounded-md shadow-lg">
			<div>
				<h4 className="text-2xl text-copy">{school}</h4>
				<div className="flex justify-between">
					<p className=" text-[10px] capitalize text-copy-lighter">
						{qualification}
					</p>
					<p className="text-[10px] capitalize text-copy-lighter">{date}</p>
				</div>
			</div>
			<p className="text-copy-light text-sm">{desc}</p>
		</div>
	);
}
