import { ReactNode } from "react";
import "./media-card.styles";
import { 
  CardMediaContainer, 
  CardMediaContent, 
  CardMediaHeader, 
  CardMediaImage, 
  CardMediaButton 
} from "./media-card.styles";
import { useNavigate } from "react-router-dom";

interface MediaCardProps {
  styles: any;
  header: string;
  imageUrl: string;
  imageTitle: string;
  path: string;
  content: ReactNode | string;
}

export default function MediaCard({ styles, header, imageUrl, imageTitle, path, content }: MediaCardProps) {
  const navigate = useNavigate();

  const navigateToPath = (path: string) => {
    navigate(path);
  };

  return (
    <CardMediaContainer>
      <CardMediaImage src={`${imageUrl}`} alt={`${imageTitle}`} width={ 0.97 * styles.width} height={0.7 * styles.height} />
      <CardMediaHeader>{header}</CardMediaHeader>
      <CardMediaContent>{content}</CardMediaContent>
      <CardMediaButton onClick={() => navigateToPath(path)}>Learn more</CardMediaButton>
    </CardMediaContainer>
  );
}
