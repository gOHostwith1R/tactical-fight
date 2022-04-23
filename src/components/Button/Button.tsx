import { FC } from 'react';
import "./styles.css";

export const Button:FC<ButtonProps> = ({onDefend}) => <button className="button" onClick={onDefend}>Defend</button>;

interface ButtonProps {
    onDefend: () => void;
}