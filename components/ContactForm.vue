<script setup lang="ts">

const state = reactive({
    email: undefined,
    name: undefined,
    message: undefined,
});

const loading = ref(false);

const validate = () => {
    const errors = [];
    if (!state.email) {
        errors.push({ path: 'email', message: 'Email is required' });
    } else if (!isValidEmail(state.email)) {
        errors.push({ path: 'email', message: 'Invalid email format' });
    }
    if (!state.name) errors.push({ path: 'name', message: 'Name is required' });
    if (!state.message) errors.push({ path: 'message', message: 'Message is required' });
    return errors;
};

const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const router = useRouter();
const formSubmitted = useFormSubmitted();

async function onSubmit() {
    const mail = useMail();
    loading.value = true;
    try {
        await mail.send({
            subject: 'Contact Form Submission',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #0044cc;">Contact Form Submission</h2>
                <p><strong>Sender Name:</strong> ${state.name}</p>
                <p><strong>Sender Email:</strong> ${state.email}</p>
                <p><strong>Message:</strong></p>
                <p style="background-color: #f9f9f9; border-left: 4px solid #0044cc; padding: 10px;">${state.message}</p>
            </div>`
        });
        formSubmitted.value = true;
        router.push('/thanks');
    } catch (error) {
        console.error('Error sending email:', error);
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <div class="bg-black rounded-lg shadow-lg p-4 md:p-8 max-w-full md:max-w-lg mx-auto space-y-6">
        <UForm :validate="validate" :state="state" class="w-full space-y-4" @submit="onSubmit">
            <UFormGroup label="Name" name="name">
                <UInput v-model="state.name" placeholder="Your name" class="w-full p-2 md:p-3" />
            </UFormGroup>

            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" placeholder="Your email" class="w-full p-2 md:p-3" />
            </UFormGroup>

            <UFormGroup label="Message" name="message">
                <UTextarea v-model="state.message" placeholder="Your message" class="w-full p-2 md:p-3" :rows="5" />
            </UFormGroup>

            <button type="submit"
                class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                :disabled="loading">
                <span v-if="loading">Sending...</span>
                <span v-else>Submit</span>
            </button>
        </UForm>
    </div>
</template>


<style scoped>
button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>
