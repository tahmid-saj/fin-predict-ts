import { ReactNode } from "react";
import "./simple-card.styles";
import { 
  CardContainer, 
  CardContent, 
  CardHeader
} from "./simple-card.styles";

interface CardProps {
  styles: any;
  header: string;
  content: ReactNode | string;
}

export default function Card({ styles, header, content }: CardProps) {

  return (
    <CardContainer style={{ width: `${styles.width}`, height: `${styles.height}` }}>
      <CardHeader>{header}</CardHeader>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
}
