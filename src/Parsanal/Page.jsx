import { Text } from "@mantine/core";

export default function Rahul() {
  return (
    <div id="page" style={{ padding: "20px" }}>
      <Text style={{ background: "white" }}>Hii</Text>

      <Text style={{ color: "red", marginTop: "10px" }}>
        Hii, me Rahul Swami
      </Text>

      <Text
        size="sm"
        style={{
          marginTop: "10px",
          lineHeight: 1.9,
          fontSize: "1.1rem",
          color: "#eee",
        }}
      >
        <strong>Rahul</strong> hoon, ek{" "}
        <strong style={{ background: "red" }}>
          Photo Editor, Video Editor & Poster Designer
        </strong>{" "}
        – Sirsa me based.
      </Text>
    </div>
  );
}
