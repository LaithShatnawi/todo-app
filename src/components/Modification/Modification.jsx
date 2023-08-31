import "./Modiication.scss";
import {
  NumberInput,
  MantineProvider,
  Select,
  Switch,
  Card,
  Text,
} from "@mantine/core";

const Modification = () => {
  return (
    <>
      <div className="settingsContain">
        <h1>Manage Settings</h1>
        <div className="con">
          <div className="update">
            <MantineProvider
              inherit
              theme={{
                components: {
                  InputWrapper: {
                    styles: (theme) => ({
                      label: {
                        backgroundColor:
                          theme.colorScheme === "dark"
                            ? "rgba(255, 255, 255, .1)"
                            : "rgba(0, 0, 0, .1)",
                      },
                    }),
                  },

                  Input: {
                    styles: (theme) => ({
                      input: {
                        borderColor:
                          theme.colors.violet[theme.fn.primaryShade()],
                      },
                    }),
                  },
                },
              }}
            >
              <h2>Update Settings</h2>
              <Switch
                label="Show Completed ToDos"
                color="violet"
                className="switch"
              />
              <NumberInput mt="xl" label="Items Per Page" placeholder={3} />
              <Select
                label="Sort Keyword"
                placeholder="Pick one"
                data={[{ value: "difficulty", label: "Difficulty" }]}
              />
            </MantineProvider>
            <button className="settingsBtn">Show New Settings</button>
          </div>
          <div className="updatED">
            <Card shadow="sm" padding="xl" component="a" target="_blank" className="card">
              <Text weight={500} size={30} mt="md" className="updatedTitle">
                Updated Settings
              </Text>

              <Text mt="xs" color="black" size="sm" className="updatedText">
                {"Show Completed ToDos"}
              </Text>
              <Text mt="xs" color="black" size="sm" className="updatedText">
                Items Per Page {2}
              </Text>
              <Text mt="xs" color="black" size="sm" className="updatedText">
                Sort Keyword: {"Difficulty"}
              </Text>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modification;
