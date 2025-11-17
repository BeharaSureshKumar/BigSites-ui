<template>
    <section id="jobseeker">
        <form id="appointment-form" role="form" method="post" action="#">
        <div class="col-md-12 col-sm-12">
            <div class="col-md-6 col-sm-6">
                <h4>Profiles(s)</h4>
                <h5>View profiles shown interest for the list of JDs published</h5>
                <b-collapse
                    class="card"
                    animation="slide"
                    v-for="(collapse, index) of collapses"
                    :key="index"
                    :open="isOpen == index"
                    @open="isOpen = index"
                    :aria-id="'contentIdForA11y5-' + index">
                    <template #trigger="props">
                        <div
                            class="card-header"
                            role="button"
                            :aria-controls="'contentIdForA11y5-' + index"
                            :aria-expanded="props.open"
                        >
                            <p class="card-header-title">
                                {{ collapse.title }}
                            </p>
                            <a class="card-header-icon">
                                <b-icon
                                    :icon="props.open ? 'menu-down' : 'menu-up'">
                                </b-icon>
                            </a>
                        </div>
                    </template>
                    <div class="card-content">
                        <div class="content">
                        
                           {{ collapse.text }}
                        </div>
                    </div>
                </b-collapse>
            </div>
        </div>    
        </form>  
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: 0,
                collapses: [
                {
                    title: 'Title 1',
                    text: 'Text 1'
                },
                {
                    title: 'Title 2',
                    text: 'Text 2'
                },
                {
                    title: 'Title 3',
                    text: 'Text 3'
                }
                ]
            }
        }
    }
</script>