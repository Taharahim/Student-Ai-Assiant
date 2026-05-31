import Sidebar from "../components/Sidebar";

export default function Lectures() {
  const lectures = [
    {
      title: "JavaScript Basics",
      video: "https://youtube.com",
      pdf: "#",
    },
    {
      title: "React Introduction",
      video: "https://youtube.com",
      pdf: "#",
    },
  ];

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px" }} className="container">
        <h2>Lectures</h2>

        <div className="grid">
          {lectures.map((lecture, index) => (
            <div className="card" key={index}>
              <h3>{lecture.title}</h3>

              <a href={lecture.video} target="_blank" rel="noreferrer">
                Watch Video
              </a>

              <br />
              <br />

              <a href={lecture.pdf}>Download Notes</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}