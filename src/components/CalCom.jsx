import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalCom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "project-strategy-call" });
      cal("floatingButton", {
        calLink: "faromtheedev/project-strategy-call",
        config: { layout: "month_view" },
        buttonText: "Schedule Call",
        buttonColor: "#1B99F7",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
}
