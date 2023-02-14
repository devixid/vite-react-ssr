import { Spacer, Text, Grid } from "@nextui-org/react";
import { memo } from "react";

function Home(): JSX.Element {
  return (
    <>
      <Spacer y={2} />
      <Grid.Container css={{ placeItems: "center", placeContent: "center" }}>
        <Text
          size="$5xl"
          css={{
            background: "$gradient",
            backgroundClip: "text",
            "-webkit-text-fill-color": "transparent",
            fontWeight: "$extrabold",
            display: "inline",
          }}
        >
          Hello There
        </Text>
        <Text
          size="$5xl"
          css={{
            display: "inline",
          }}
        >
          👋
        </Text>
        <Spacer y={1} />
        <Text
          css={{ textAlign: "center", fontWeight: "$extrabold" }}
          size="$2xl"
        >
          I am
        </Text>{" "}
        <Text
          size="$2xl"
          css={{
            background: "$gradient",
            backgroundClip: "text",
            "-webkit-text-fill-color": "transparent",
            fontWeight: "$extrabold",
            display: "inline",
          }}
        >
          Dimas Saputra
        </Text>
        <Text>A Junior Frontend Web Developers Passionate In Indonesia</Text>
      </Grid.Container>
    </>
  );
}

export default memo(Home);
