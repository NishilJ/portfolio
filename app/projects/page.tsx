import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

const projects = [
    {
        title: "Machine Learning Walkability Index",
        description:
            "Random Forest model predicting walkability scores (0–100) using OSM and Census data.",
        tags: ["Machine Learning", "GIS", "Python"],
    },
    {
        title: "Transit Trip Planner",
        description:
            "Web-based transit routing app using real-time GTFS data and the MOTIS API.",
        tags: ["React", "Typescript", "Transportation", "APIs"],
    },
    {
        title: "Urban Accessibility Analysis",
        description:
            "Spatial analysis of access to jobs and services using network-based travel times.",
        tags: ["Urban Planning", "Network Analysis", "GIS"],
    },
];

export default function ProjectsPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-3">Projects</h1>
                <p className="text-slate-400 max-w-2xl">
                    My projects
                </p>
            </header>


            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        className="bg-slate-900 border-slate-800 hover:border-slate-700 transition"
                    >
                        <CardHeader>
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <CardDescription className="text-slate-400">
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}

