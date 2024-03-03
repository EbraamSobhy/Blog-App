import { Card } from "react-bootstrap";

const Post4 = () => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src=
"https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png"
				width={20}
				height={250}
			/>
			<Card.Body className="text-center">
				<Card.Title>Computer Network</Card.Title>
				<Card.Text>
					An interconnection of multiple devices,
					also known as hosts, that are connected using
					multiple paths for the purpose of sending/
					receiving data media. Computer networks can
					also include multiple devices/mediums which
					help in the communication between two different
					devices; these are known as Network devices
					and include things such as routers, switches,
					hubs, and bridges.
				</Card.Text>
				<a href="https://www.spiceworks.com/tech/networking/articles/what-is-a-computer-network/" className="btn btn-primary">Read More</a>
			</Card.Body>
		</Card>
	)
}

export default Post4;
