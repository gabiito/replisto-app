import { Empty } from "antd"

function NotFound() {
  return (
    <div className="h-full grid items-center">
      <Empty description="404 | Page Not Found"/>
    </div>
  );
}

export default NotFound;
