<template>
  <CCard style="width: 50rem">
    <CCardImage orientation="top" src="@/assets/logo.png" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >Some quick example text to build on the card title and make up the bulk
        of the card's content.</CCardText
      >
      <CButton href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>
<script>
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/vue";

export default {
  name: "profile-page",
  components: { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton },
};
</script>
