import {
  PrettyChatWindow
} from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
    <PrettyChatWindow
      projectId="71b7aeea-47ea-4f29-b962-fc8f27856a70"
      username={props.user.username}
      secret={props.user.username}
      style={{ height: '100%' }}
    />
    </div>
  );
};
export default ChatsPage;
