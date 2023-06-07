import { CloseCircleFilled, DeleteTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100px;
`;

export const HeaderContainer = styled.div``;

export const StyledCloseCircleFilled = styled(CloseCircleFilled)`
	font-size: 20px;
	position: absolute;
	right: -12px;
	top: -15px;
`;
export const FirstBlock = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background: #faf9f9;
	z-index: 20;
	height: 50%;
	width: 100%;
`;
export const SecondBlock = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	position: relative;
	background: greenyellow;
	z-index: 20;
	height: 50%;
	width: 100%;
`;
export const Content = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 30%;
	left: 35%;
	height: 250px;
	width: 600px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;
export const Title = styled.span`
	font-size: 14px;
	font-weight: 600;
	text-transform: none;
	padding-left: 10px;
`;
export const HeaderTitle = styled(Title)`
	font-size: 18px;
`;

export const CancelBtn = styled(Button)`
	color: white;
	font-weight: 600;
	font-size: 18px;
	width: 200px;
	display: flex;
	justify-content: unset;
	align-items: center;
`;
export const RemoveBtn = styled(CancelBtn)`
	color: red;
	margin-right: 20px;
	width: 200px;
`;

export const StyledIcon = styled(DeleteTwoTone)`
	margin-left: 30px;
	font-size: 18px;
`;

export const Circle = styled.div<{ isNew: boolean }>`
	margin-left: 30px;
	height: 10px;
	width: 10px;
	background-color: ${({ isNew }) => (isNew ? "green" : "#bbb")};
	border-radius: 50%;
	display: inline-block;
`;

export const Logo = styled.img`
	margin-left: 30px;
	width: 35px;
	height: 35px;
`;

export const DescriptionContainer = styled.span`
	display: flex;
	flex-direction: column; 
	justify-content: center;
	align-items: center;
	margin-left: 30px;
	height: 100%;
`;