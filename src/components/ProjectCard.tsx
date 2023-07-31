import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
    children: string; 
    title: string | JSX.Element;
    img: string;
    link: string;
}

export function ProjectCard({ children, title, img, link }: Props) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title> 
        <Card.Text>
            {children}
        </Card.Text>
        <Button variant="primary" href={link} target="_blank">Link</Button>
      </Card.Body>
    </Card>
  );
}