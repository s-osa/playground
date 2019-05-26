class Message(message: String) {
    val message: String

    init {
        this.message = message
    }

    fun puts(n: Int = 1) {
        var i = 0

        while (i < n) {
            println(message)
            i++
        }
    }
}

val msg = Message("Hello Kotlin class!")
msg.puts(10)
