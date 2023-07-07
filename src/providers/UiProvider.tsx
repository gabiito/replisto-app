import { ConfigProvider } from 'antd';

interface UiProviderProps {
  children: React.ReactNode;
}

const UiProvider: React.FC<UiProviderProps> = ({children}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#39d69f",
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default UiProvider;
