import profileImg from "../assets/profile.jpg";

const About: React.FC = () => {
    return (
        <div className="px-6 py-10 max-w-5xl mx-auto text-green-400 font-mono space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div className="grid grid-cols-[130px_1fr] gap-y-3 text-base w-full md:w-2/3">
                    <span className="text-green-500">name:</span>
                    <span>Darrick Silvester</span>

                    <span className="text-green-500">age:</span>
                    <span>19</span>

                    <span className="text-green-500">work rights:</span>
                    <span>Student Visa (Subclass 500)</span>

                    <span className="text-green-500">location:</span>
                    <span>Sydney, Australia</span>

                    <span className="text-green-500">role:</span>
                    <span>Computer Science Student @ UNSW</span>

                    <span className="text-green-500">focus:</span>
                    <span>Backend Development</span>

                    <span className="text-green-500">languages:</span>
                    <span>TypeScript, JavaScript, HTML/CSS, Python, C, Rust</span>
                </div>
                <img
                    src={profileImg}
                    alt="Darrick Silvester"
                    className="w-70 h-60 object-cover border-2 border-green-500 shadow-md"
                />
            </div>

            <div className="text-lg leading-relaxed space-y-4">
                <p>
                    I’m currently in my penultimate year of a Computer Science degree at UNSW, where I’ve maintained a distinction average. I’m especially drawn to backend development because I enjoy figuring out how systems actually work behind the scenes.
                </p>
                <p>
                    I interned at <strong>Waddle</strong>, an AI edtech startup, where I worked on backend APIs using <strong>Node.js</strong> and <strong>MongoDB</strong>. During my time there, I gained hands-on experience building real-world systems and contributing to a fast-paced product team.
                </p>
                <p>
                    Outside of class and internships, I’ve led teams in hackathons and participated in a leadership workshop at UNSW. I love solving problems, building things that are useful, and collaborating with people who enjoy what they do.
                </p>
            </div>
        </div>
    )
}

export default About;