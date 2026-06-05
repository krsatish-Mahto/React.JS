
// import { Bookmark } from "lucide-react";
const card = () => {
  return (
        <div className="card">

            <div className="top">
                <img src="" alt="logo" />
                <button>Save </button>
            </div>

            <div className="center">
                <h3>Google <span>5 days ago</span></h3>
                <h2>Frontend Engineer </h2>
                <div className="tag">
                    <h4>Part Time</h4>
                    <h4>Senior Level</h4>
                </div>
            </div>

            <div className="bottom">
                <div>
                     <h3>$80/hr</h3>
                     <p>Mumbai, India</p>
                </div>

                <button>Apply Now</button>
               
            </div>
        </div>
  )
}

export default card
