<template>
    <b-message type="is-info" has-icon style="max-width: 550px;">
        <h4>Securo JOBZ invites "{{ agentNm }}".</h4>
        <h4>Agent Email - {{ agentEmail }} </h4>
        <p>Click the "Profile Email" to view the details</p>
    </b-message>
</template>
<script>
export default {
  props: [
    'agentNm',
    'agentEmail'
  ],
}
</script>
