import "./portfolio.css";
import apps from './apps';

const Portfolio = () =>
    <main className="portfolio">
        {
            apps.map(app => (
                <div className="card">
                    <img src={app.image} alt={app.name} />
                    <div>
                        <h2>{app.name}</h2>
                        <h6>{app.description}</h6>
                        <p><a href={app.repo}>Github Repo</a></p>
                        <p><a href={app.deployed}>Deployed App</a></p>
                    </div>
                </div>
            ))
        }
    </main>

export default Portfolio;