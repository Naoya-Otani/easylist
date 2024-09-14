import { prisma } from "@/lib/prisma";
import Id from "@/src/components/templates/rakutan/Id";
import type { Metadata } from "next";

type Props = {
	params: { id: string };
};

async function getSubjectName({ params }: Props) {
	try {
		const rakutan = await prisma.courseSummary.findUnique({
			where: {
				id: Number.parseInt(params.id),
			},
			select: {
				subjectName: true,
				locationName: true,
			},
		});

		return rakutan;
	} catch (error) {
		console.error("Error fetching subject name:", error);
		throw error;
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	try {
		const rakutan = await getSubjectName({ params });

		if (!rakutan) {
			return {
				title: "Subject Not Found",
				description: "The requested subject could not be found.",
			};
		}

		return {
			title: `${rakutan.locationName} ${rakutan.subjectName}`,
			description: `${rakutan.locationName} ${rakutan.subjectName} のページです。`,
		};
	} catch (error) {
		console.error("Error generating metadata:", error);
		return {
			title: "Error",
			description: "An error occurred while generating page metadata.",
		};
	}
}

const SpecifiedRakutanPage = ({ params }: { params: { id: string } }) => {
	return <Id id={params.id} />;
};

export default SpecifiedRakutanPage;
