import './resume.css';
const doc = require('./resume.pdf');

const Resume = () =>
<main>
    <embed src={doc} width="100%" height="100%"></embed>
</main>

export default Resume;
